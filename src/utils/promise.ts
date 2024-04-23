export async function waitMs(ms: number): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function waitUntil(condition: () => boolean, intervalMs = 100): Promise<void> {
  while (!condition()) {
    // eslint-disable-next-line no-await-in-loop
    await waitMs(intervalMs);
  }
}
