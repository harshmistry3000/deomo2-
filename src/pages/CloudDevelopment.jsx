import React from 'react';
import { Cobe } from "@/components/ui/cobe-globe";
import { WordPullUpText } from "@/components/ui/word-pull-up-text";
import { TypingText } from "@/components/ui/typing-text";
import { Code, CodeHeader, CodeBlock } from "@/components/ui/animate-code";
import { Zap, TrendingUp, Cpu, Cloud, Shield, Smartphone } from 'lucide-react';
import LogoLoop from "@/components/ui/logo-loop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker,
  SiAmazonwebservices, SiFirebase, SiMongodb, SiPostgresql, SiNodedotjs,
  SiFigma, SiGithub, SiGooglecloud, SiKubernetes, SiTerraform
} from 'react-icons/si';


export function CloudDevelopment() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Title Section - Centered in Viewport */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] pt-32 pb-16">
        <div className="text-center max-w-5xl space-y-8">
          <WordPullUpText 
            text="Cloud Development Services"
            className="font-ubuntu text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl md:text-7xl drop-shadow-sm md:leading-tight lg:leading-tight xl:leading-tight"
          />
          <WordPullUpText
            text="Enhance business value with our comprehensive Cloud Development Services. Embrace scalability, seamless migration of resource-intensive processes, and achieve unmatched business agility."
            className="font-ubuntu text-sm md:text-base text-gray-500 font-normal tracking-wide leading-relaxed drop-shadow-none max-w-2xl mx-auto"
          />
        </div>
      </div>

      {/* Earth Component */}
      <div className="w-full max-w-6xl flex items-center justify-center">
        <Cobe variant="default" className="h-[900px] w-full max-w-none z-0" style={{ maxWidth: '900px' }} />
      </div>

      {/* Under-Earth Typing Text Box */}
      <div className="mt-8 mb-32 mx-auto max-w-4xl p-8 bg-slate-50 border border-slate-200/60 rounded-2xl shadow-sm px-4 sm:px-8">
        <div className="font-ubuntu text-sm md:text-base text-gray-700 font-medium leading-relaxed text-center">
          <TypingText 
            text="Cloud Computing accelerates digital transformation, streamlining processes in a reliable, centralized platform. Embrace cloud technology for long-term cost reduction and empower your business with automation for growth."
            speed={25}
            delay={0.5}
          />
        </div>
      </div>

      {/* Cloud Technology Solutions Section */}
      <div className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse xl:flex-row items-center justify-between gap-16 xl:gap-24">
          
          {/* Code Base - Left Side */}
          <div className="w-full xl:w-7/12 flex items-center justify-center">
            <Code className="w-full max-w-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-[#0A0F1C] border-none">
              <CodeHeader title="infrastructure.tf" className="bg-[#111827] border-none" />
              <CodeBlock 
                showLineNumbers={false}
                lines={[
                  "$ terraform apply -auto-approve",
                  "Initializing cloud backend provider...",
                  "✓ Loading configuration files...",
                  "✓ Kubernetes cluster 'edge-node-01' configured",
                  "Provisioning stateless EC2 instances...",
                  "✓ 3/3 Auto-scaling Load Balancers active",
                  "Syncing container deployment images...",
                  "Establishing secure VPC connections...",
                  "🚀 Enterprise Cloud Infrastructure is LIVE!"
                ]} 
              />
            </Code>
          </div>

          {/* Text - Right Side */}
          <div className="w-full xl:w-5/12 flex flex-col items-center xl:items-start justify-center text-center xl:text-left space-y-8">
            <h2 className="font-ubuntu text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Your Business with Cloud Technology
            </h2>
            <p className="font-ubuntu text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              In today's digital landscape, the cloud serves as the bedrock for modern software. Whether seeking a dependable database for an app or planning to revamp local infrastructure, a robust cloud backend is essential.
            </p>
          </div>
          
        </div>
      </div>

      {/* Why Cloud Services Section */}
      <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-16">
          <div className="text-center space-y-4">
            <span className="inline-block font-ubuntu text-sm font-semibold text-blue-600 uppercase tracking-widest px-4 py-1.5 bg-blue-50 rounded-full">
              Our Advantages
            </span>
            <h2 className="font-ubuntu text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Why Cloud Services?
            </h2>
            <p className="font-ubuntu text-gray-500 text-base max-w-xl mx-auto">
              Built for speed, scale, and savings — our cloud solutions put your business ahead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {/* Card 1 - Business */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-5">
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-colors duration-300">
                <TrendingUp size={26} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-ubuntu text-xl font-bold text-gray-900">Business</h3>
              <p className="font-ubuntu text-gray-500 text-sm leading-relaxed">
                Swift turnarounds, cost-effective pay-per-use, seamless experiences. Unlock growth with streamlined operations and customer satisfaction.
              </p>
            </div>
            
            {/* Card 2 - Performance */}
            <div className="group bg-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Zap size={26} className="text-white" />
              </div>
              <h3 className="font-ubuntu text-xl font-bold text-white">Performance</h3>
              <p className="font-ubuntu text-blue-100 text-sm leading-relaxed">
                Unlock agility, scalability, and availability through seamless cloud migration. Elevate your operations and drive growth like never before.
              </p>
            </div>
            
            {/* Card 3 - Technology */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center space-y-5">
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-colors duration-300">
                <Cpu size={26} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-ubuntu text-xl font-bold text-gray-900">Technology</h3>
              <p className="font-ubuntu text-gray-500 text-sm leading-relaxed">
                Invest in the future with our easily customizable, pay-per-use technology solutions. Stay ahead in the dynamic digital landscape with Us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud-Based Mobile App Development Section */}
      <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-start justify-center">
          
          {/* Text Content */}
          <div className="w-full max-w-3xl flex flex-col items-start justify-center space-y-8">
            <span className="inline-block font-ubuntu text-sm font-semibold text-blue-600 uppercase tracking-widest px-4 py-1.5 bg-blue-50 rounded-full">
              Mobile + Cloud
            </span>
            <h2 className="font-ubuntu text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Cloud-Based Mobile App Development
            </h2>
            <p className="font-ubuntu text-base text-gray-600 leading-loose">
              Experience the future of mobile app development with our SEO-optimized Cloud-Based services. We harness cloud technology to build applications that excel in functionality and search engine rankings — with scalability, cost efficiency, global accessibility, and real-time updates baked in.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[(Shield, 'Robust Security'), (Cloud, 'Global Accessibility'), (Smartphone, 'Cross-Platform Apps'), (Zap, 'Real-Time Updates')].map((_, idx) => {
                const items = [
                  { Icon: Shield, label: 'Robust Security' },
                  { Icon: Cloud, label: 'Global Accessibility' },
                  { Icon: Smartphone, label: 'Cross-Platform Apps' },
                  { Icon: Zap, label: 'Real-Time Updates' },
                ];
                const { Icon, label } = items[idx];
                return (
                  <div key={label} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <span className="font-ubuntu text-sm font-medium text-gray-700">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Our Cloud Service Offerings Section */}
      <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-14">

          {/* Title */}
          <div className="text-center space-y-5 max-w-2xl">
            <span className="inline-block font-ubuntu text-xs font-semibold text-blue-600 uppercase tracking-[0.2em] px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              What We Offer
            </span>
            <h2 className="font-ubuntu text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Our Cloud Service Offerings
            </h2>
            <p className="font-ubuntu text-gray-500 text-base leading-relaxed">
              End-to-end cloud solutions designed to accelerate growth, reduce cost, and future-proof your infrastructure.
            </p>
          </div>

          {/* Cards Grid — 3 on top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              {
                num: '01',
                title: 'Cloud Consulting',
                desc: 'Utilize our best-in-class cloud consulting services to give your business a competitive edge with expert cloud consultants. We help reduce costs, scale faster and increase solution scalability.',
              },
              {
                num: '02',
                title: 'Cloud-Native App Development',
                desc: 'Harness the power of cloud engineering for accelerated business success. Our comprehensive cloud services ensure your organization maximizes the full potential of the cloud in every aspect.',
              },
              {
                num: '03',
                title: 'Cloud Migration Consulting',
                desc: "We offer end-to-end cloud migration services tailored to your organization's unique needs. Our team evaluates your existing infrastructure to ensure a smooth, risk-free transition.",
              },
            ].map(({ num, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 flex flex-col space-y-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Blue top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                <span className="font-ubuntu text-3xl font-extrabold text-blue-100 group-hover:text-blue-200 transition-colors duration-300 select-none">{num}</span>
                <h3 className="font-ubuntu text-lg font-bold text-gray-900 leading-snug">{title}</h3>
                <p className="font-ubuntu text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <span className="text-base">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* 2 cards below, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[calc(66.666%+24px)]">
            {[
              {
                num: '04',
                title: 'Cloud Architecture Design',
                desc: 'Maximize cloud capabilities through automation and orchestration. Our proven architecture design services ensure safe innovation, seamless adoption of the latest features, and minimal system downtime.',
              },
              {
                num: '05',
                title: 'Cloud Assessment',
                desc: 'Unlock the full potential of your cloud infrastructure with our world-class assessment and cost optimization services. Expert solutions tailored to help organizations make the most of their cloud investment.',
              },
            ].map(({ num, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 flex flex-col space-y-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                <span className="font-ubuntu text-3xl font-extrabold text-blue-100 group-hover:text-blue-200 transition-colors duration-300 select-none">{num}</span>
                <h3 className="font-ubuntu text-lg font-bold text-gray-900 leading-snug">{title}</h3>
                <p className="font-ubuntu text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <span className="text-base">→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Tech LogoLoop Section */}
      <div className="w-full py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-10">
          <p className="font-ubuntu text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Technologies We Work With
          </p>
          <div className="w-full">
            <LogoLoop
              logos={[
                { node: <SiReact />, title: 'React' },
                { node: <SiNextdotjs />, title: 'Next.js' },
                { node: <SiTypescript />, title: 'TypeScript' },
                { node: <SiTailwindcss />, title: 'Tailwind CSS' },
                { node: <SiDocker />, title: 'Docker' },
                { node: <SiAmazonwebservices />, title: 'AWS' },
                { node: <SiFirebase />, title: 'Firebase' },
                { node: <SiMongodb />, title: 'MongoDB' },
                { node: <SiPostgresql />, title: 'PostgreSQL' },
                { node: <SiNodedotjs />, title: 'Node.js' },
                { node: <SiFigma />, title: 'Figma' },
                { node: <SiGithub />, title: 'GitHub' },
                { node: <SiGooglecloud />, title: 'Google Cloud' },
                { node: <SiKubernetes />, title: 'Kubernetes' },
                { node: <SiTerraform />, title: 'Terraform' },
              ]}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={56}
              pauseOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technologies we work with"
              className="text-gray-400"
            />
          </div>
        </div>
      </div>
      {/* Get In Touch Section */}
      <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          {/* Left — Blue Panel */}
          <div className="bg-blue-600 px-10 py-16 lg:px-16 flex flex-col justify-between space-y-10 rounded-tl-3xl rounded-bl-3xl">
            <div className="space-y-6">
              <span className="inline-block font-ubuntu text-xs font-semibold text-blue-200 uppercase tracking-[0.2em] px-3 py-1 bg-white/10 rounded-full">
                Contact Us
              </span>
              <h2 className="font-ubuntu text-4xl sm:text-5xl font-bold text-white leading-tight">
                Get In Touch
              </h2>
              <p className="font-ubuntu text-blue-100 text-base leading-relaxed max-w-sm">
                Questions or need support? Contact our seasoned IT consultants for tailored solutions that enhance your digital footprint. Your success is our mission!
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              {[
                { icon: '📞', title: 'Phone', value: '99789 71636' },
                { icon: '✉️', title: 'Email', value: 'info@astniq.com' },
                { icon: '📍', title: 'Address', value: '503, Sun Avenue One, near Shyamal, Ambawadi, Ahmedabad, Gujarat' },
              ].map(({ icon, title, value }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-ubuntu text-xs text-blue-200 font-semibold uppercase tracking-wider mb-0.5">{title}</p>
                    <p className="font-ubuntu text-white text-sm leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative dots */}
            <div className="flex gap-2 opacity-30">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white" />
              ))}
            </div>
          </div>

          {/* Right — Form Panel */}
          <div className="bg-white px-10 py-16 lg:px-16 flex flex-col justify-center space-y-5 shadow-2xl rounded-tr-3xl rounded-br-3xl border border-gray-100">
            <div className="space-y-1 mb-2">
              <h3 className="font-ubuntu text-2xl font-bold text-gray-900">Send us a message</h3>
              <p className="font-ubuntu text-sm text-gray-400">We'll get back to you within 24 hours.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name"
                className="font-ubuntu text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
              <input type="text" placeholder="Last Name"
                className="font-ubuntu text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
              <input type="email" placeholder="Email Address"
                className="font-ubuntu text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
              <input type="tel" placeholder="Phone Number"
                className="font-ubuntu text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
            </div>
            <input type="text" placeholder="Subject"
              className="w-full font-ubuntu text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
            <textarea rows={4} placeholder="Tell us about your project..."
              className="w-full font-ubuntu text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none" />
            <div className="pt-1">
              <button className="button-55" role="button">
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-950 text-white">
        {/* Blue accent top line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">

            {/* Brand — wider */}
            <div className="md:col-span-2 flex flex-col space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <h3 className="font-ubuntu text-xl font-bold text-white">Astniq</h3>
              </div>
              <p className="font-ubuntu text-gray-400 text-sm leading-relaxed max-w-xs">
                Delivering cutting-edge cloud, mobile, and web solutions that empower businesses to scale, innovate, and lead in the digital era.
              </p>
              <div className="flex gap-3">
                {[
                  { label: 'in', color: 'hover:bg-blue-600' },
                  { label: 'tw', color: 'hover:bg-sky-500' },
                  { label: 'fb', color: 'hover:bg-blue-700' },
                  { label: 'gh', color: 'hover:bg-gray-600' },
                ].map(({ label, color }) => (
                  <div key={label} className={`w-9 h-9 rounded-lg bg-white/10 ${color} flex items-center justify-center cursor-pointer transition-colors duration-200`}>
                    <span className="text-xs font-bold uppercase text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-ubuntu text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Services</h4>
              {['Cloud Consulting', 'Cloud Migration', 'Cloud Architecture', 'Cloud Assessment', 'Native App Dev'].map((item) => (
                <a key={item} href="#" className="font-ubuntu text-gray-400 text-sm hover:text-white transition-colors duration-200">{item}</a>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-ubuntu text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Company</h4>
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'].map((item) => (
                <a key={item} href="#" className="font-ubuntu text-gray-400 text-sm hover:text-white transition-colors duration-200">{item}</a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col space-y-4">
              <h4 className="font-ubuntu text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Contact</h4>
              <div className="flex items-center gap-3">
                <span className="text-base">📞</span>
                <p className="font-ubuntu text-gray-400 text-sm">99789 71636</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base">✉️</span>
                <p className="font-ubuntu text-gray-400 text-sm">info@astniq.com</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <p className="font-ubuntu text-gray-400 text-sm leading-relaxed">503, Sun Avenue One,<br />Ahmedabad, Gujarat</p>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-ubuntu text-gray-600 text-sm">© {new Date().getFullYear()} Astniq Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="font-ubuntu text-gray-600 text-sm hover:text-blue-400 transition-colors duration-200">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
