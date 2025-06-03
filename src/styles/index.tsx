type Props = React.HTMLAttributes<HTMLDivElement>

export const Menu: React.FC<Props> = ({ children, className, ...props }: Props) => (
	<div className={`bg-content1 flex justify-between items-center gap-4 py-2 px-4 ${className}`} {...props}>{children}</div>
)

export const Between: React.FC<Props> = ({ children, className, ...props }: Props) => (
	<div className={`flex justify-between items-center gap-2 ${className}`} {...props}>{children}</div>
)

export const Flex: React.FC<Props> = ({ children, className, ...props }: Props) => (
	<div className={`flex items-center gap-2 ${className}`} {...props}>{children}</div>
)

export const Center: React.FC<Props> = ({ children, className, ...props }: Props) => (
	<div className={`w-full h-full grid place-content-center ${className}`} {...props}>{children}</div>
)

export const Container: React.FC<Props> = ({ children, className, ...props }: Props) => (
	<div className={`container mx-auto p-4 min-h-screen ${className}`} {...props}>{children}</div>
)

export const ContainerCollapse: React.FC<Props> = ({ children, className, ...props }: Props) => (
	<div className={`h-screen grid grid-rows-[auto_1fr_auto] gap-2 ${className}`} {...props}>{children}</div>
)

export const Collapse: React.FC<Props> = ({ children, className, ...props }: Props) => (
	<div className={`flex flex-col gap-2 p-2 overflow-y-scroll ${className}`} {...props}>{children}</div>
)

type PropsTitle = React.HTMLAttributes<HTMLHeadingElement>

export const Title: React.FC<PropsTitle> = ({ children, className, ...props }: Props) => (
	<div className="max-w-40 sm:max-w-max">
		<h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm" {...props}>{children}</h4>
	</div>
)

export const Subtitle: React.FC<PropsTitle> = ({ children, className, ...props }: Props) => (
	<div className="max-w-40 sm:max-w-max text-gray-500" {...props}>
		<h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{children}</h4>
	</div>
)

const getTime = (hour: Date) => {
	const hourDate = new Date(hour);
	return (('0' + hourDate.getHours()).slice(-2)).concat(':').concat(('0' + hourDate.getMinutes()).slice(-2))
}

interface IMessage extends Props {
	message: string;
	hour: Date;
	newMessage?: boolean;
}

export const Message: React.FC<IMessage> = ({ children, className, message, hour, newMessage = false, ...props }: IMessage) => (
	<div className={`${newMessage ? 'bg-primary self-end' : 'bg-content1 self-start'} py-1 px-2 rounded-lg w-auto min-w-[20%] max-w-[80%] ${className}`} {...props}>
		<h4 className="text-sm">{message}</h4>
		<p className="text-tiny text-end">{getTime(hour)}</p>
	</div>
)