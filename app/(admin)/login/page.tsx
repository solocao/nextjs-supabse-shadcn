import LoginForm from "@/components/LoginForm";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <LoginForm searchParams={searchParams} />
    </div>
  );
}
