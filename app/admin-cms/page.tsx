import { getContent } from "@/lib/content";
import Editor from "./Editor";

export const dynamic = "force-dynamic";
export default async function AdminPage() {
  return <Editor initial={await getContent(true)} />;
}
