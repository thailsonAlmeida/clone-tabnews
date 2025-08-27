# CLONE TAB-NEWS

Um repositório destinado ao projeto do curso.dev

# TECNOLOGIAS

- Codespaces: `Facilita o desenvolvimento em nuvem sem precisar configurar ambiente local.`
- Javascript: `Linguagem base da web, essencial para interatividade e aplicações modernas.`
- Next.js: `Framework que otimiza o React com SSR, SSG e melhor SEO.`
- React: `Biblioteca para criar interfaces dinâmicas e reutilizáveis.`
- EditorConfig: `Garante consistência de estilo de código entre diferentes editores.`
- Prettier: `Automatiza a formatação, mantendo o código padronizado.`

# GIT

## Lista de comandos

Os comando abaixo funcionam de forma **offline** no git.

- `git log` - lista os `commits` do repositório.
- `git add` - sobe alterações para a `staging area`.
- `git commit` - realiza novos `commits`
- `git commit -m "mensagem"` - atalho para fazer novos commits
- `git commit --amend` - subtitui oo `commit` anterior por um novo, mas aproveita as alterações dele.
- `git diff` - calcula a diferença entre as versões/alterações dos arquivos.

Os comando abaixo funcionam de forma **oline** no git.

- `git push` - empurrar alterações `locais` para o `origin`.
- `git push --force` - empurrar de forma forçada alterações `locais` para o `origin`.
- `git push -f` - a forma comprimida do comanda anterior.

# ORGANIZAÇÃO DE PASTAS

```
📦root/
├──📂pages/
│ └──📄index.js
├──📂models/
│ ├──📄users.js
│ ├──📄content.js
│ └──📄password.js
├──📂infra/
│ ├──📄database.js
│ ├──📂migrations/
│ └──📂provisioning/
│ ├──📂staging/
│ └──📂production/
└──📂tests/

```
