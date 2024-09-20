function ProjectLayout({ title, children }: { title: string, children: React.ReactNode }) {
    return(
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="prose max-w-none">{children}</div>
        </div>
    )
}

export default function AnimationMOvies () {
    return (
        <ProjectLayout title="Animation Movies PLatform">
            <p>This platform is dedicated to showcasing animated films, providing an extensive database of animation movies.</p>
            <p>Users can rate and review films, and the platform features a robust search functionality to easily find specific titles. Built with React and a RESTful API, the application allows for efficient data management and a responsive interface.</p>
        </ProjectLayout>
    )
}