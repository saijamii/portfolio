const StatusPing = () => {
    return (
        <span className="relative flex items-center justify-center ml-2">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
            <span className="sr-only">Currently Active</span>
        </span>
    );
};

export default StatusPing;
