type Props = {
  footerText: string
}

export default function Footer({ footerText }: Props) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <p className="text-sm">{footerText}</p>
      </div>
    </footer>
  )
}
  