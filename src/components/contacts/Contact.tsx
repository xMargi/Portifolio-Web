import { useEffect, useRef, useState } from "react"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser"

const formDataSchema = z.object({
    email: z.string().min(5, "Digite um email válido").trim(),
    message: z.string().min(5, "Digite o contexto da mensagem"),
    name: z.string().min(5, "Digite seu nome"),
    subject: z.string().min(5, "Digite o assunto")
})

type FormDataSchema = z.infer<typeof formDataSchema>

const ErrorMsg = ({ msg }: { msg?: string }) =>
    msg ? <span className="text-red-300/80 text-[10px] tracking-wide mt-1">{msg}</span> : null

export const Contact = () => {
    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataSchema>({
        resolver: zodResolver(formDataSchema)
    })

    const onSubmit = async (data: FormDataSchema) => {
        await emailjs.send(
            `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
            `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
            {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message
            },
            `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
        )
    }

    return (
        <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-6 sm:p-20 relative overflow-hidden" style={{ backgroundColor: '#005b4a' }}>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.06]" />
                <div className="absolute top-0 left-2/4 w-px h-full bg-white/[0.06]" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-white/[0.06]" />
                <div className="absolute top-1/4 left-0 w-full h-px bg-white/[0.06]" />
                <div className="absolute top-2/4 left-0 w-full h-px bg-white/[0.06]" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-white/[0.06]" />
                <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full bg-black/10 blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
            </div>

            <div className="w-full max-w-4xl relative z-10">

                <div
                    className="mb-10 sm:mb-16 transition-all duration-700"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
                >
                    <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-2 font-medium">contato</p>
                    <h1 className="font-bebas text-5xl sm:text-8xl text-white tracking-widest leading-none">
                        Vamos{' '}
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>
                            Conversar
                        </span>
                    </h1>
                    <div className="h-px w-32 bg-white/20 mt-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">

                    <div
                        className="flex flex-col justify-between gap-8 transition-all duration-700 delay-150"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-24px)' }}
                    >
                        <p className="text-white/60 text-sm leading-relaxed">
                            Aberto a oportunidades, freelas e colaborações. Me manda uma mensagem e respondo assim que possível.
                        </p>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1 group cursor-pointer">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">email</span>
                                <a href="mailto:viniciusff200@gmail.com" target="_blank" className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">viniciusff200@gmail.com</a>
                            </div>
                            <div className="flex flex-col gap-1 group cursor-pointer">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">github</span>
                                <a href="https://github.com/xMargi" target="_blank" className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">github.com/xMargi</a>
                            </div>
                            <div className="flex flex-col gap-1 group cursor-pointer">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">linkedin</span>
                                <a href="https://www.linkedin.com/in/vinicius-moreira-siqueira" target="_blank" className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">https://www.linkedin.com/in/vinicius-moreira-siqueira</a>
                            </div>
                        </div>

                        <div className="hidden sm:flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-white/40" />
                            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                        </div>
                    </div>

                    <form
                        className="flex flex-col gap-5 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-700 delay-300"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(24px)' }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase tracking-[0.25em] text-white/50">Nome</label>
                                <input
                                    type="text"
                                    className={`bg-transparent border-b py-2 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/30 ${errors.name ? 'border-red-300/60' : 'border-white/20 focus:border-white/60'}`}
                                    placeholder="Seu nome"
                                    {...register("name")}
                                />
                                <ErrorMsg msg={errors.name?.message} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase tracking-[0.25em] text-white/50">Email</label>
                                <input
                                    type="email"
                                    className={`bg-transparent border-b py-2 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/30 ${errors.email ? 'border-red-300/60' : 'border-white/20 focus:border-white/60'}`}
                                    placeholder="seu@email.com"
                                    {...register("email")}
                                />
                                <ErrorMsg msg={errors.email?.message} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[10px] uppercase tracking-[0.25em] text-white/50">Assunto</label>
                            <input
                                type="text"
                                className={`bg-transparent border-b py-2 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/30 ${errors.subject ? 'border-red-300/60' : 'border-white/20 focus:border-white/60'}`}
                                placeholder="Sobre o que é?"
                                {...register("subject")}
                            />
                            <ErrorMsg msg={errors.subject?.message} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[10px] uppercase tracking-[0.25em] text-white/50">Mensagem</label>
                            <textarea
                                rows={4}
                                className={`bg-transparent border-b py-2 text-white text-sm outline-none transition-colors duration-300 placeholder:text-white/30 resize-none ${errors.message ? 'border-red-300/60' : 'border-white/20 focus:border-white/60'}`}
                                placeholder="Sua mensagem..."
                                {...register("message")}
                            />
                            <ErrorMsg msg={errors.message?.message} />
                        </div>

                        <button
                            type="submit"
                            className="
                                mt-2 self-end
                                text-[11px] uppercase tracking-[0.3em] text-white
                                border border-white/30 rounded-full px-8 py-3
                                transition-all duration-300
                                hover:bg-white hover:text-[#005b4a]
                                active:scale-95
                            "
                        >
                            Enviar mensagem →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}