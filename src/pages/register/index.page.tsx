import { ArrowRight } from '@phosphor-icons/react'

import * as S from './styles'
import { Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'

export default function Register() {
  return (
    <S.Container>
      <S.Header>
        <Heading as="strong">Bem vindo ao ignite-call</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </S.Header>

      <S.Form as="form">
        <label>
          <Text size="sm">Nome do usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuário" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-nome" />
        </label>
      </S.Form>
    </S.Container>
  )
}
