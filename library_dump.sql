--
-- PostgreSQL database dump
--

\restrict KnD64At9HbJsser0hkozCGwZEBSmmwo7P5pmXQFjVebUNtJcQHHKE5mILdb5szP

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-11-24 14:41:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16594)
-- Name: aftors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aftors (
    id_aftor integer NOT NULL,
    name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL
);


ALTER TABLE public.aftors OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16560)
-- Name: books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books (
    id_books integer NOT NULL,
    name character varying(100) NOT NULL,
    data date NOT NULL,
    description character varying(100) NOT NULL
);


ALTER TABLE public.books OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16612)
-- Name: books_aftors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books_aftors (
    id_aftor integer NOT NULL,
    id_books integer NOT NULL
);


ALTER TABLE public.books_aftors OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16577)
-- Name: books_dgarnu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books_dgarnu (
    id_books integer NOT NULL,
    id_dgarna integer NOT NULL
);


ALTER TABLE public.books_dgarnu OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16629)
-- Name: books_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books_users (
    id_books integer NOT NULL,
    id_user integer NOT NULL,
    data date NOT NULL,
    status character varying(20) NOT NULL
);


ALTER TABLE public.books_users OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16569)
-- Name: dgarnu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dgarnu (
    id_dgarna integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(100) NOT NULL
);


ALTER TABLE public.dgarnu OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16602)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id_user integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 4946 (class 0 OID 16594)
-- Dependencies: 222
-- Data for Name: aftors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aftors (id_aftor, name, last_name) FROM stdin;
\.


--
-- TOC entry 4943 (class 0 OID 16560)
-- Dependencies: 219
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books (id_books, name, data, description) FROM stdin;
\.


--
-- TOC entry 4948 (class 0 OID 16612)
-- Dependencies: 224
-- Data for Name: books_aftors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books_aftors (id_aftor, id_books) FROM stdin;
\.


--
-- TOC entry 4945 (class 0 OID 16577)
-- Dependencies: 221
-- Data for Name: books_dgarnu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books_dgarnu (id_books, id_dgarna) FROM stdin;
\.


--
-- TOC entry 4949 (class 0 OID 16629)
-- Dependencies: 225
-- Data for Name: books_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books_users (id_books, id_user, data, status) FROM stdin;
\.


--
-- TOC entry 4944 (class 0 OID 16569)
-- Dependencies: 220
-- Data for Name: dgarnu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dgarnu (id_dgarna, name, description) FROM stdin;
\.


--
-- TOC entry 4947 (class 0 OID 16602)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id_user, name, email) FROM stdin;
\.


--
-- TOC entry 4785 (class 2606 OID 16601)
-- Name: aftors aftors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aftors
    ADD CONSTRAINT aftors_pkey PRIMARY KEY (id_aftor);


--
-- TOC entry 4789 (class 2606 OID 16618)
-- Name: books_aftors books_aftors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_aftors
    ADD CONSTRAINT books_aftors_pkey PRIMARY KEY (id_aftor, id_books);


--
-- TOC entry 4783 (class 2606 OID 16583)
-- Name: books_dgarnu books_dgarnu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_dgarnu
    ADD CONSTRAINT books_dgarnu_pkey PRIMARY KEY (id_books, id_dgarna);


--
-- TOC entry 4779 (class 2606 OID 16568)
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id_books);


--
-- TOC entry 4781 (class 2606 OID 16576)
-- Name: dgarnu dgarnu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dgarnu
    ADD CONSTRAINT dgarnu_pkey PRIMARY KEY (id_dgarna);


--
-- TOC entry 4787 (class 2606 OID 16611)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- TOC entry 4792 (class 2606 OID 16619)
-- Name: books_aftors books_aftors_id_aftor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_aftors
    ADD CONSTRAINT books_aftors_id_aftor_fkey FOREIGN KEY (id_aftor) REFERENCES public.aftors(id_aftor);


--
-- TOC entry 4793 (class 2606 OID 16624)
-- Name: books_aftors books_aftors_id_books_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_aftors
    ADD CONSTRAINT books_aftors_id_books_fkey FOREIGN KEY (id_books) REFERENCES public.books(id_books);


--
-- TOC entry 4790 (class 2606 OID 16584)
-- Name: books_dgarnu books_dgarnu_id_books_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_dgarnu
    ADD CONSTRAINT books_dgarnu_id_books_fkey FOREIGN KEY (id_books) REFERENCES public.books(id_books);


--
-- TOC entry 4791 (class 2606 OID 16589)
-- Name: books_dgarnu books_dgarnu_id_dgarna_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_dgarnu
    ADD CONSTRAINT books_dgarnu_id_dgarna_fkey FOREIGN KEY (id_dgarna) REFERENCES public.dgarnu(id_dgarna);


--
-- TOC entry 4794 (class 2606 OID 16636)
-- Name: books_users books_users_id_books_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_users
    ADD CONSTRAINT books_users_id_books_fkey FOREIGN KEY (id_books) REFERENCES public.books(id_books);


--
-- TOC entry 4795 (class 2606 OID 16641)
-- Name: books_users books_users_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books_users
    ADD CONSTRAINT books_users_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id_user);


-- Completed on 2026-11-24 14:41:23

--
-- PostgreSQL database dump complete
--

\unrestrict KnD64At9HbJsser0hkozCGwZEBSmmwo7P5pmXQFjVebUNtJcQHHKE5mILdb5szP

