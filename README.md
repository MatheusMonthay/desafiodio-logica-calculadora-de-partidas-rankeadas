# Calculadora de Partidas Rankeadas

## 📖 Descrição

Este projeto foi desenvolvido como parte do desafio **"Calculadora de Partidas Rankeadas"** da DIO. O objetivo é criar uma função simples em JavaScript que classifica um jogador de acordo com o saldo de vitórias e derrotas em partidas ranqueadas, utilizando variáveis, operadores, laços de repetição e estruturas de decisão.

## 🚀 Funcionalidades

- Receber como parâmetros a quantidade de vitórias e derrotas de um jogador.
- Calcular o saldo de vitórias (vitórias - derrotas).
- Classificar o jogador de acordo com o saldo de vitórias usando uma estrutura condicional.
- Exibir uma mensagem final com o saldo de vitórias e o nível correspondente.

## 🏅 Regras de Classificação

O jogador é classificado em diferentes níveis com base no saldo de vitórias, conforme a tabela a seguir:

- Saldo de vitórias menor que **10**: 🛡️ **Ferro**
- Saldo de vitórias entre **10** e **20**: 🥉 **Bronze**
- Saldo de vitórias entre **21** e **50**: 🥈 **Prata**
- Saldo de vitórias entre **51** e **80**: 🥇 **Ouro**
- Saldo de vitórias entre **81** e **90**: 💎 **Diamante**
- Saldo de vitórias entre **91** e **100**: 🏅 **Lendário**
- Saldo de vitórias maior que **100**: 🏆 **Imortal**

## 💻 Exemplo de Saída

Se o jogador tiver **55** vitórias e **88** derrotas, a saída será:

```bash
O Jogador tem de saldo de -33 está no nível de Ferro.
