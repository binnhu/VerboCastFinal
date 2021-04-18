/* esquema lógico livros: */

CREATE TABLE Livro (
    titulo varchar,
    autores varchar,
    editora varchar,
    id serial PRIMARY KEY
);

CREATE TABLE Edicao (
    isbn varchar,
    numero integer,
    ano integer,
    quantidade integer,
    id serial PRIMARY KEY,
    cotacao numeric,
    capa varchar,
    id_livro integer,
    CONSTRAINT FK_Edicao_2  FOREIGN KEY (id_livro) REFERENCES Livro (id)
    ON DELETE RESTRICT
);

CREATE TABLE Disciplina (
    nome varchar,
    id serial PRIMARY KEY,
    cod_suap varchar,
    curso varchar
);

CREATE TABLE Disciplina_Livro (
    id_disciplina integer,
    id_livro integer,
    basico boolean,
    CONSTRAINT fk_disciplina_livro_1 FOREIGN KEY (id_disciplina) REFERENCES Disciplina (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_disciplina_livro_2 FOREIGN KEY (id_livro) REFERENCES Livro (id)
        ON DELETE CASCADE,
    CONSTRAINT pk_disciplina_livro PRIMARY KEY (id_disciplina, id_livro)
);