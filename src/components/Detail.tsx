import React from 'react'
import styled from 'styled-components'

const ColoredBlock = styled.div`
  .coloredblock {
    background-color: black;
    min-height: 300px;
    border-radius: 12px;
    padding: 24px;
    color: white;
  }
`
const SpacedColumn = styled.div`
  .spacedcolumn {
    padding: 0px 24px;
  }
`

const Detail = () => (
  <>
    <div className="jumbotron">
      <h1>
        O
        <div
          style={{
            display: 'inline',
            color: 'red'
          }}
        >
          Plethora
        </div>
        &eacute; uma plataforma de conte&uacute;do.
      </h1>
      <p>
        O Efforia conta com produtos criativos para a Web na área de
        investimentos coletivos (crowdfunding), comércio social (social
        commerce) e publicação social (social publishing), além da própria
        criação de animações, websites e hotsites. A agência dispõe de tudo que
        você estava precisando para dar aquele boom no seu negócio na Internet.
        Tudo isso de uma forma simples, fácil e rápida, e bem adaptada às
        necessidades do empresário.
      </p>
    </div>
    <div className="row text-center">
      <SpacedColumn className="col-md-4 text-center">
        <ColoredBlock style={{ backgroundColor: '#00b34b' }}>
          <div className="text-center">
            <h2>ESPALHE</h2>
            <p>
              A plataforma conta com a integração das maiores redes sociais,
              como o Facebook para postagens e eventos, o YouTube para vídeos e
              o Twitter. Desde o seu princípio, o Efforia tem um DNA social.
            </p>
          </div>
        </ColoredBlock>
      </SpacedColumn>
      <SpacedColumn className="col-md-4 text-center">
        <ColoredBlock style={{ backgroundColor: '#156aff' }}>
          <div>
            <h2>COMPRE</h2>
            <p>
              Contando sempre com a confiabilidade da PayPal, junto com um
              serviço inédito de frete em parceria com o Correios, o PayPal
              Frete Fácil, você tem a garantia de um bom serviço de comércio
              eletrônico.
            </p>
          </div>
        </ColoredBlock>
      </SpacedColumn>
      <SpacedColumn className="col-md-4 text-center">
        <ColoredBlock style={{ backgroundColor: '#741b47' }}>
          <div>
            <h2>PROMOVA</h2>
            <p>
              Está sem ideia ou grana para um novo produto para sua loja? Deixe
              que os seus clientes te dêem uma forçinha para isso, a partir do
              investimento coletivo, também chamado de crowdfunding.
            </p>
          </div>
        </ColoredBlock>
      </SpacedColumn>
    </div>
    <div
      style={{ margin: 'auto' }}
      className="row"
    >
      <div id="Grade"></div>
    </div>
    <div
      id="Espaco"
      className="modal hide fade newusers"
    ></div>
  </>
)

export default Detail
