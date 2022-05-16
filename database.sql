-- CREATE TABLES: 

CREATE TABLE "users" (
	"id" serial NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"city" varchar(50),
	"state" varchar(2),
	"username" varchar(50) UNIQUE,
	"password" varchar(255) NOT NULL,
	"profile_image_link" varchar(500),
	"calendar_link" varchar(500),
	"payment_link" varchar(500),
	"fileshare_link" varchar(50),
	"time_of_day_pref" varchar(50),
	"user_type" varchar(20),
	"description" varchar(1000),
	"pub_medium" varchar(20),
	"approved" BOOLEAN,
	"years_of_exp" integer,
	"stories_per_month" integer,
	"brand_name" varchar(125),
	"brand_assets_link" varchar(500),
	"plan_type" varchar(500),
	"payment_status" BOOLEAN,
	"affiliate_link" varchar(500),
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "publications" (
	"id" serial NOT NULL,
	"pub_title" varchar(125) NOT NULL UNIQUE,
	CONSTRAINT "publications_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "markets" (
	"id" serial NOT NULL,
	"market_name" varchar(125) NOT NULL UNIQUE,
	CONSTRAINT "markets_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "users_markets" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"markets_id" integer NOT NULL,
	CONSTRAINT "users_markets_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "journalists_brands" (
	"id" serial NOT NULL,
	"journalists_id" integer NOT NULL,
	"brands_id" integer NOT NULL,
	CONSTRAINT "journalists_brands_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "users_publications" (
	"id" serial NOT NULL,
	"publications_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "users_publications_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

-- ALTER TABLES (INCLUDES ON DELETE CASCADE FOR FOREIGN KEYS)

ALTER TABLE "users_markets" ADD CONSTRAINT "users_markets_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") on DELETE CASCADE;
ALTER TABLE "users_markets" ADD CONSTRAINT "users_markets_fk1" FOREIGN KEY ("markets_id") REFERENCES "markets"("id") on DELETE CASCADE;

ALTER TABLE "journalists_brands" ADD CONSTRAINT "journalists_brands_fk0" FOREIGN KEY ("journalists_id") REFERENCES "users"("id") on DELETE CASCADE;
ALTER TABLE "journalists_brands" ADD CONSTRAINT "journalists_brands_fk1" FOREIGN KEY ("brands_id") REFERENCES "users"("id") on DELETE CASCADE;

ALTER TABLE "users_publications" ADD CONSTRAINT "users_publications_fk0" FOREIGN KEY ("publications_id") REFERENCES "publications"("id") on DELETE CASCADE;
ALTER TABLE "users_publications" ADD CONSTRAINT "users_publications_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id") on DELETE CASCADE;


-- INSERT STATEMENTS 
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
