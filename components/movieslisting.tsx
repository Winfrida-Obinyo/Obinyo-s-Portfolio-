function ProjectLayout({ title, children }: { title: string, children: React.ReactNode }) {
    return(
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="prose max-w-none">{children}</div>
        </div>
    )
}

export default function MovieListingPlatform () {
    return (
        <ProjectLayout title="Movie Listing PLatform">
            <p>This platform allows users to browse and list movies across various genres.</p>
            <p>Users can filter movies by genre, release date, and ratings, making it easy to find their favorite films. The backend is built using Node.js and Express, ensuring reliable server performance, while the front end is crafted with React and Next.js for optimal performance and a smooth user experience.</p>
        </ProjectLayout>
    )
}