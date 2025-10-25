import Image from "next/image";

export default function AProposPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        À Propos Page
      </h1>
      <div className="">
        <Image
          src="/inaso.png"
          alt="About Us"
          width={500}
          height={300}
        />
      </div>
    </main>
  )
}