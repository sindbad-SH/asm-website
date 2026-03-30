import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the storage module
vi.mock("./storage", () => ({
  storagePut: vi.fn().mockResolvedValue({
    key: "1-files/test-file_abc123.png",
    url: "https://cdn.example.com/1-files/test-file_abc123.png",
  }),
}));

// Mock the db module
vi.mock("./db", () => ({
  insertFile: vi.fn().mockResolvedValue({
    id: 1,
    userId: 1,
    filename: "test-file.png",
    fileKey: "1-files/test-file_abc123.png",
    url: "https://cdn.example.com/1-files/test-file_abc123.png",
    mimeType: "image/png",
    size: 100,
    createdAt: new Date(),
  }),
  getFilesByUser: vi.fn().mockResolvedValue([
    {
      id: 1,
      userId: 1,
      filename: "test-file.png",
      fileKey: "1-files/test-file_abc123.png",
      url: "https://cdn.example.com/1-files/test-file_abc123.png",
      mimeType: "image/png",
      size: 100,
      createdAt: new Date(),
    },
  ]),
  getFileById: vi.fn().mockImplementation(async (fileId: number) => {
    if (fileId === 1) {
      return {
        id: 1,
        userId: 1,
        filename: "test-file.png",
        fileKey: "1-files/test-file_abc123.png",
        url: "https://cdn.example.com/1-files/test-file_abc123.png",
        mimeType: "image/png",
        size: 100,
        createdAt: new Date(),
      };
    }
    return null;
  }),
  deleteFile: vi.fn().mockResolvedValue(undefined),
  // Keep existing db exports
  getDb: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createUnauthContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("files.upload", () => {
  it("uploads a file and returns the record", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // Small base64 payload (a tiny PNG-like blob)
    const base64Data = Buffer.from("fake-image-data").toString("base64");

    const result = await caller.files.upload({
      filename: "test-file.png",
      mimeType: "image/png",
      data: base64Data,
    });

    expect(result).toBeDefined();
    expect(result!.filename).toBe("test-file.png");
    expect(result!.mimeType).toBe("image/png");
    expect(result!.url).toContain("https://");
  });

  it("rejects unauthenticated upload", async () => {
    const ctx = createUnauthContext();
    const caller = appRouter.createCaller(ctx);

    const base64Data = Buffer.from("fake-image-data").toString("base64");

    await expect(
      caller.files.upload({
        filename: "test-file.png",
        mimeType: "image/png",
        data: base64Data,
      })
    ).rejects.toThrow();
  });
});

describe("files.list", () => {
  it("returns files for the authenticated user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.files.list();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]!.filename).toBe("test-file.png");
  });

  it("rejects unauthenticated list", async () => {
    const ctx = createUnauthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.files.list()).rejects.toThrow();
  });
});

describe("files.delete", () => {
  it("deletes a file owned by the user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.files.delete({ fileId: 1 });

    expect(result).toEqual({ success: true });
  });

  it("rejects deletion of non-existent file", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.files.delete({ fileId: 999 })).rejects.toThrow("File not found");
  });

  it("rejects unauthenticated deletion", async () => {
    const ctx = createUnauthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.files.delete({ fileId: 1 })).rejects.toThrow();
  });
});
