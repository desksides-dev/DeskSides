
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "publications" (
	"id" SERIAL PRIMARY KEY,
	"pub_title" VARCHAR(125)
);

CREATE TABLE "markets" (
	"id" SERIAL PRIMARY KEY,
	"market_name" VARCHAR(125)
);

INSERT INTO "publications" ("pub_title")
VALUES ('Vogue'), ('Architectural Digest'), ('Allure'), ('Bon Appetit'), ('Conde Nast Traveler'), 
       ('Epicurious'), ('Glamour'), ('GQ'), ('SELF'), ('Tatler'), ('Teen Vogue'), ('The New Yorker'), 
       ('Vanity Fair'), ('Cosmopolitan'), ('Country Living'), ('Delish'), ('ELLE'), ('ELLE Decor'), 
       ('Esquire'), ('Food Network Magazine'), ('Good Housekeeping'), ('Harper’s Bazaar'), 
       ('HGTV Magazine'), ('House Beautiful'), ('Men’s Health'), ('Oprah Daily'), ('Prevention'), 
       ('Redbook'), ('Runner’s World'), ('Seventeen'), ('Town & Country'), ('Veranda'), ('Woman’s Day'), 
       ('Women’s Health'), ('VeryWell'), ('Health'), ('Parents'), ('All Recipes'), ('The Spruce Eats'), 
       ('EatingWell'), ('Food & Wine'), ('Better Homes & Gardens'), ('Martha Stewart Living'), 
       ('The Spruce'), ('Real Simple'), ('MyDomaine'), ('Domino'), ('Southern Living'), ('Byrdie'), 
       ('Bustle'), ('Popsugar'), ('Purewow'), ('InStyle'), ('Shape'), ('Travel + Leisure'), ('Treehugger'), 
       ('People'), ('Coastal Living'), ('Traditional Home');

INSERT INTO "markets" ("market_name")
VALUES ('Fashion'), ('Beauty'), ('Domestic Lifestyle'), ('Health and Wellness'), ('Travel'), ('Tech'), 
       ('Parenting'), ('Food and Beverage'), ('Interior Design and Architecture'), 
       ('Entertainment and Culture'), ('Fitness'), ('Business'), ('Sustainability'), ('Sports'), 
       ('Consumer Goods');