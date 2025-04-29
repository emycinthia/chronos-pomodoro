import { Heading } from './components/Heading'
import './styles/theme.css'
import './styles/global.css'

export function App() {
    return (
        <> { /* --> react fragment */ }
            <Heading attr2={123} attr='String'>
                Olá, mundo!
            </Heading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nobis qui, voluptates doloribus nam dolores dicta nisi laborum pariatur blanditiis doloremque fuga. Dolorum beatae, inventore cum tenetur quaerat cupiditate eligendi?
            </p>
        </>
    )
}