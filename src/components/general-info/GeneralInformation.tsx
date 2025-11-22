

const GeneralInformation: React.FC = () => {
    // Using a neutral 'info' variant for general information cards
    const variantClasses = {
        info: {
            container:
                "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
            icon: "text-blue-light-500",
            title: "Title 1",
            description: "Description 1",
            linkHref: "https://www.google.com",
            linkText: "Read More",
        },
    };

    // Icon for general info. Could be a generic info icon or removed if not desired.
    const icon = (
        <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.6501 11.9996C3.6501 7.38803 7.38852 3.64961 12.0001 3.64961C16.6117 3.64961 20.3501 7.38803 20.3501 11.9996C20.3501 16.6112 16.6117 20.3496 12.0001 20.3496C7.38852 20.3496 3.6501 16.6112 3.6501 11.9996ZM12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961ZM10.9992 7.52468C10.9992 8.07697 11.4469 8.52468 11.9992 8.52468H12.0002C12.5525 8.52468 13.0002 8.07697 13.0002 7.52468C13.0002 6.9724 12.5525 6.52468 12.0002 6.52468H11.9992C11.4469 6.52468 10.9992 6.9724 10.9992 7.52468ZM12.0002 17.371C11.586 17.371 11.2502 17.0352 11.2502 16.621V10.9445C11.2502 10.5303 11.586 10.1945 12.0002 10.1945C12.4144 10.1945 12.7502 10.5303 12.7502 10.9445V16.621C12.7502 17.0352 12.4144 17.371 12.0002 17.371Z"
                fill=""
            />
        </svg>
    );

    return (
        <div
            className={`rounded-xl border p-4 ${variantClasses.info.container}`}
        >
            <div className="flex items-start gap-3">
                {/* Only display icon if needed, otherwise this div can be removed */}
                <div className={`-mt-0.5 ${variantClasses.info.icon}`}>
                    {icon}
                </div>

                <div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
                        {variantClasses.info.title}
                    </h4>

                    {/* Using dangerouslySetInnerHTML for RSS descriptions which might contain HTML */}
                    <p
                        className="text-sm text-gray-500 dark:text-gray-400"
                        dangerouslySetInnerHTML={{ __html: variantClasses.info.description }}
                    ></p>

                    {/* Assuming RSS links are external, use a standard <a> tag */}
                    {variantClasses.info.linkHref && (
                        <a
                            href={variantClasses.info.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-sm font-medium text-gray-500 underline dark:text-gray-400"
                        >
                            {variantClasses.info.linkText}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

// Renaming the export to match the component name and its new purpose
export default GeneralInformation;
