import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { nanoid } from "nanoid";
import { storagePut } from "./storage";
import { insertFile, getFilesByUser, getFileById, deleteFile } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    /** Upload a file: receives base64-encoded data, uploads to S3, stores metadata in DB */
    upload: protectedProcedure
      .input(
        z.object({
          filename: z.string().min(1).max(512),
          mimeType: z.string().min(1).max(128),
          /** Base64-encoded file content */
          data: z.string().min(1),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const buffer = Buffer.from(input.data, "base64");
        const size = buffer.length;

        // Max 10 MB
        if (size > 10 * 1024 * 1024) {
          throw new Error("File size exceeds 10 MB limit");
        }

        // Generate a unique key to prevent enumeration
        const suffix = nanoid(12);
        const sanitizedFilename = input.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
        const fileKey = `${ctx.user.id}-files/${sanitizedFilename}-${suffix}`;

        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.mimeType);

        // Store metadata in DB
        const record = await insertFile({
          userId: ctx.user.id,
          filename: input.filename,
          fileKey,
          url,
          mimeType: input.mimeType,
          size,
        });

        return record;
      }),

    /** List all files for the current user */
    list: protectedProcedure.query(async ({ ctx }) => {
      return getFilesByUser(ctx.user.id);
    }),

    /** Delete a file (only the owner can delete) */
    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const file = await getFileById(input.fileId);
        if (!file) {
          throw new Error("File not found");
        }
        if (file.userId !== ctx.user.id) {
          throw new Error("You do not have permission to delete this file");
        }
        await deleteFile(input.fileId);
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
