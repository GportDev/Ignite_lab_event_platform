import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availabeAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailabe = isPast(props.availabeAt)
  const availableDateFormatted = format(props.availabeAt, "EEEE' • 'd' de 'MMMM' • ' k'h'mm", {
    locale: ptBR
  })

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors">
        <header className="flex items-center justify-between">
          {isLessonAvailabe ? (
            <span className="flex items-center gap-2 text-sm text-blue-500">
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500">
              <Lock size={20}/>
              Em Breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <span>
          <strong className="text-gray-200 mt-5 block">
            {props.title}
          </strong>
        </span>
      </div>
    </Link>
  )
}