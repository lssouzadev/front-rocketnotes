import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" type="text" />
          <Textarea placeholder="Observações" type="text" />

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
