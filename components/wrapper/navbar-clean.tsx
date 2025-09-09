import Link from 'next/link';
import { BlocksIcon } from "lucide-react";

export default function NavBar() {
    return (
        <div className="flex min-w-full fixed justify-between p-4 border-b z-10 bg-background/80 backdrop-blur-sm">
            <Link href="/" className="flex items-center space-x-2">
                <BlocksIcon className="w-6 h-6" />
                <span className="font-bold text-lg">NMCyber</span>
            </Link>
            
            <div className="flex items-center gap-4">
                {/* Add your navigation items here */}
            </div>
        </div>
    );
}
