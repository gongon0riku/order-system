import liff from "@line/liff";

export async function initLiff() {
  await liff.init({
    liffId: process.env.NEXT_PUBLIC_LIFF_ID!,
  });

  return liff;
}