
import { topNavbarItems } from '@/constants/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function TopMenu() {

    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
            <div className="flex justify-first items-center space-x-12">
                <Image className='cursor-pointer' onClick={() => router.push('/')} src="/ArmoireLogoBlack.png" alt="logo" width={120} height={0} />
                <div className="space-x-8">
                    {topNavbarItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition-all font-medium duration-200 ${isActive
                                        ? 'underline underline-offset-4'
                                        : 'text-black hover:opacity-80'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
