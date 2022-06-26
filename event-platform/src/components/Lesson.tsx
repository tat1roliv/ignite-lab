import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


/*
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}
*/


export function Lesson () {
    //const isLessonAvailable = isPast(props.availableAt);
    //const availableDateFormatted = format(props.availableAt, "EEEE' | 'd' de  'MMMM' | 'k'h'mm", {
    //    locale: ptBR
    //})

    return (
        <a href="#">
            <span className="text-gray-300">
                data
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                <header className="flex items-center justify-between">
             
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteudo liberado
                        </span>
           

                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                      aula
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                   title
                </strong>
            </div>
    </a>
    )
}