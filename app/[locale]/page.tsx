import { getTranslations } from "next-intl/server";
import React from "react";

export default async function HomePage() {
  await getTranslations("Footer");

  return <div className="text-xl" />;
}
