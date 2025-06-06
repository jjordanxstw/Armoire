import AuthForms from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">เข้าสู่ระบบ</h2>
      <AuthForms/>
    </div>
  )
}