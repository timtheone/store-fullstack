<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220805155050 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE goods_order_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE goods_order (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE goods_order_goods (goods_order_id INT NOT NULL, goods_id INT NOT NULL, PRIMARY KEY(goods_order_id, goods_id))');
        $this->addSql('CREATE INDEX IDX_A5F1F02F3CB47EB ON goods_order_goods (goods_order_id)');
        $this->addSql('CREATE INDEX IDX_A5F1F02B7683595 ON goods_order_goods (goods_id)');
        $this->addSql('ALTER TABLE goods_order_goods ADD CONSTRAINT FK_A5F1F02F3CB47EB FOREIGN KEY (goods_order_id) REFERENCES goods_order (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE goods_order_goods ADD CONSTRAINT FK_A5F1F02B7683595 FOREIGN KEY (goods_id) REFERENCES goods (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE goods_order_goods DROP CONSTRAINT FK_A5F1F02F3CB47EB');
        $this->addSql('DROP SEQUENCE goods_order_id_seq CASCADE');
        $this->addSql('DROP TABLE goods_order');
        $this->addSql('DROP TABLE goods_order_goods');
    }
}
