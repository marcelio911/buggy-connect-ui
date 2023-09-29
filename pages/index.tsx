import { ArrowRightIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import { BugButton } from "@/components/common/BugButton";
import { useState } from "react";

export default function IndexPage() {
	const [loading, setLoading] = useState(false);
	return (
		<DefaultLayout>

			<section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 sm:py-8">
				<div className="inline-block max-w-lg text-center justify-center">
					<div className="inline-flex items-center justify-center rounded-md">
						<Image src="/images/logo.svg" alt="Logo" width={111} height={56} />
					</div>
					<div className={"gap-4 py-8"}>
						<Image src="/images/buggy-vehicle.svg" alt="Logo" width={282} height={198} className="inline-block"/>
					</div>
					<br />
					<h3 className="text-lg text-current col-auto max-w-md items-center justify-center ">
						Conectando pessoas aos passeios de Buggy mais incríveis do Brasil.
					</h3>
				</div>
				<div className="flex flex-wrap gap-4 items-center">
					<BugButton
						destination="/sample"
						clickHandler={()=>{setLoading(!loading); console.log('load: ', loading)}}
						label={"Iniciar"}
						isLoading={loading}
						iconEnd={<ArrowRightIcon />}
					/>
				</div>
			</section>
			<div className="flex flex-wrap gap-4 items-center">
					<BugButton
						destination="/sample"
						clickHandler={()=>{setLoading(!loading); console.log('load: ', loading)}}
						label={"Iniciar"}
						isLoading={loading}
						iconEnd={<ArrowRightIcon />}
					/>
				</div>

		</DefaultLayout>
	);
}
