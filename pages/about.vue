<template>
	<div>
		<NuxtLayout name="page">
			<div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
				<MainTitle>About me </MainTitle>
				<SectionParagraph>
					Hey there, i'm <span class="text-sky-500">Zackaria Slimane</span> , a passionate
					front end developer and
					<span class="text-yellow-500">javascript</span>
					enthusiast.
					Being self taught and driven by my own desire and love for programming and technology , i am
					quite comfortable with the <span class="text-green-600">Vue JS</span> ecosystem. Beyond my
					work in a startup i have dabbled many
					hours with Vue and Nuxt.
				</SectionParagraph>
				<SectionParagraph>
					I'm currently working full-time for
					<LinkBtn class="text-rose-500" link="http://adhocmaroc.com" text="ADHOC Agency" />
					,
					a digital marketing agency. I am also developing a Budgeting app,
					<LinkBtn class="text-sky-500" link="https://coinbend.netlify.app" text="Coinbend" />
					As a basic free remplacement for the YNAB app, which is a fantastic expenses tracking app
					and a wonderful book to read.
					I used this project to explore and do a deeper dive into
					<LinkBtn class="text-green-600" link="https://vuejs.org" text="Vue 3 " /> &
					<LinkBtn class="text-green-600" link="https://nuxt.com" text="Nuxt 3" /> and the server
					side
					renreding.
					While also integrating
					<LinkBtn class="text-green-600" link="https://supabase.com" text="SupaBase" /> as a Backend
					as a service BaaS.
				</SectionParagraph>

				<SectionParagraph>
					You can find some of my projects code samples and demos on
					<LinkBtn class="text-rose-500" link="https://github.com/Zackaria-Slimane"
						text="Github profile" />
					or on my
					<LinkBtn class="text-rose-500" link="/" text="Portfolio Projects" />
					page.
				</SectionParagraph>
				<SectionParagraph>
					My professionall life aside, i am either catching up and reading the latest tech news and
					articles on
					<LinkBtn class="text-sky-500" link="https://app.daily.dev" text="Daily dev app" /> , playing my nintendo switch
					or catching some waves and surfing my local beach breaks!
				</SectionParagraph>
			</div>
			<TheWorks />
			<TheStack />
			<TheFooter />
		</NuxtLayout>
	</div>
</template>

<script setup>
	useHead({
		title: 'About me - Zackaria SLIMANE',
		meta: [
			{ name: "description", content: "About Zackaria SLIMANE - Front-end Web Developer" },
			{ name: "og:description", content: "About Zackaria SLIMANE - Front-end Web Developer " },
			{ name: "twitter:description", content: "About Zackaria SLIMANE - Front-end Web Developer " },
			{ name: "og:title", content: "About Zackaria SLIMANE - Front-end Web Developer" },
			{ name: "twitter:title", content: "About Zackaria SLIMANE - Front-end Web Developer" },
		],
		link: [
			{ rel: "canonical", href: "https://zackariasl.dev/about/" },
		]
	})
</script>
