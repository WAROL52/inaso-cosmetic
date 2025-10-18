import { Logo } from '@/components/logo'
import { defaultNavigationLinks, socialLinks } from '@/lib/links'
import Link from 'next/link'

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Logo />
                </Link>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {defaultNavigationLinks.map((link,) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-0 flex flex-wrap justify-center gap-6 text-sm">
                    {
                        socialLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary block">
                        {link.icon}
                    </Link>
                        ))
                    }
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} All rights reserved</span>
            </div>
        </footer>
    )
}