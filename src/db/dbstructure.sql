create table empresas(
	idempresa INT PRIMARY KEY,
	nombreempresa VARCHAR(255),
	imagenempresa VARCHAR(255)
);
CREATE SEQUENCE empresas_idempresa_seq START 1;
ALTER TABLE empresas ALTER COLUMN idempresa SET DEFAULT nextval('empresas_idempresa_seq');
CREATE TABLE rutas(
    idruta INT PRIMARY KEY,
    nombreruta VARCHAR(255),
    idempresa INT,
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa)
);
drop table empresas;
select * from rutas;