import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  const banks = [
    {
      name: "American Express",
      slug: "amex",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      name: "Axis Bank",
      slug: "axis",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-burgundy-700"
    },
    {
      name: "HDFC Bank",
      slug: "hdfc",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    }
  ]

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        settle&apos;d
      </h1>

      <Card className="p-6">
        <div className="grid gap-4">
          {banks.map((bank) => (
            <Link 
              key={bank.slug}
              href={`/pay/${bank.slug}`}
              className="block"
            >
              <Button
                variant="default"
                className={`w-full h-16 text-lg font-semibold ${bank.bgColor} ${bank.hoverColor} transition-colors`}
              >
                {bank.name}
              </Button>
            </Link>
          ))}
        </div>
      </Card>
    </main>
  )
}
