import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";

export default function SamplePage() {
	return (
		<DefaultLayout>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<div className="flex flex-wrap gap-4 items-center">
				<Button color="primary" variant="solid">
					Solid
				</Button>
				<Button color="primary" variant="faded">
					Faded
				</Button>
				<Button color="primary" variant="bordered">
					Bordered
				</Button>
				<Button color="primary" variant="light">
					Light
				</Button>
				<Button color="primary" variant="flat">
					Flat
				</Button>
				<Button color="primary" variant="ghost">
					Ghost
				</Button>
				<Button color="primary" variant="shadow">
					Shadow
				</Button>
			</div>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Make&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
					<br />
					<h1 className={title()}>
						websites regardless of your design experience.
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						Beautiful, fast and modern React UI library.
					</h4>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						Documentation
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>
		</DefaultLayout>
	);
}