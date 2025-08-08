import {Header} from './components/header'

export default function Dashboard({children}:
    {children: React.ReactNode})
{
    return(
        <>
            <Header/>
            {children}
        </>
    )
}