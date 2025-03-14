import CreateNewContent from "@/app/dashboard/content/[template-slug]/CreateNewContent";

export default async function Page({ params }: { params: Promise<{ 'template-slug': string }> }) {
  const { 'template-slug': templateSlug } = await params;

  return <CreateNewContent templateSlug={templateSlug} />;
}
