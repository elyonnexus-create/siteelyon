'use client';
import { cn } from '@/lib/utils';
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export function ZoomParallaxDemo() {


	const images = [
		{
			src: 'https://i.ibb.co/qL5QRwmp/foto12.webp',
			alt: 'centro',
		},
		{
			src: 'https://i.ibb.co/sJFJwYyV/cima.webp',
			alt: 'Cima',
		},
		{
			src: 'https://i.ibb.co/zWchrrJY/esquerdo.webp',
			alt: 'Esquerdo',
		},
		{
			src: 'https://i.ibb.co/p6r7R4Vt/direito.webp',
			alt: 'Direito',
		},
		{
			src: 'https://i.ibb.co/xq6QXBsd/baixo.webp',
			alt: 'Baixo',
		},
		{
			src: 'https://i.ibb.co/ZRbSRWKn/framer.webp',
			alt: 'Baixo_esquerdo',
		},
		{
			src: 'https://i.ibb.co/Fb5Zxt13/bff61f1a19656ba0cac0c6c0d8be965b.webp',
			alt: 'Baixo_direito',
		},
	];

	return (
		<div className="min-h-screen w-full bg-[#0A0A0A] text-white">
			<div className="relative flex h-[30vh] md:h-[50vh] items-center justify-center overflow-hidden">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="text-center text-4xl font-bold font-['Inter']">
					Intelligence with a Soul. Execution with Purpose.
				</h1>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[5vh] md:h-[10vh] bg-[#0A0A0A]" />
		</div>
	);
}
