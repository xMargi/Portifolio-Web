import type { Project } from "@/components/projects/Projects"
import { useEffect, useState } from "react"

interface GithubRepo {
    name: string,
    description: string | null,
    html_url: string,
    homepage: string | null,
    language: string | null,
    stargazers_count: number,
    forks_count: number,
    topics: string[],
    fork: boolean
}

export const useGithubRepos = (username: string) => {
    const [repos, setRepos] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
            headers: {
                'Accept': 'application/vnd.github.mercy-preview+json'
            }
        }).then(res => {
            if (!res.ok) throw new Error("Usuário não encontrado!");
            return res.json();
        }).then(async (data: GithubRepo[]) => {
            const filtered = data.filter(r => !r.fork)

            const mapped = await Promise.all(filtered.map(async r => {
                let firstImgUrl = ''

                try {
                    const readmeRes = await fetch(`https://api.github.com/repos/${username}/${r.name}/readme`)
                    if (readmeRes.ok) {
                        const readmeData = await readmeRes.json()
                        const markdown = atob(readmeData.content.replace(/\n/g, ''))
                        const match = markdown.match(/!\[.*?\]\((.*?)\)/)
                        firstImgUrl = match?.[1] ?? ""
                    }
                } catch {
                    firstImgUrl = ""
                }
                return{
                    title: r.name,
                    description: r.description ?? "Sem Descrição",
                    firstImgUrl,
                    stackImageUrl: r.topics,
                    html_url: r.html_url
                }
            }))

            setRepos(mapped)
        })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))

    }, [username])
    return { repos, loading, error }
}