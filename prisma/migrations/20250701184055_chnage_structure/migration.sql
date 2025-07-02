/*
  Warnings:

  - You are about to drop the column `projects` on the `Skill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "projects";

-- CreateTable
CREATE TABLE "_SkillProjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_SkillProjects_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_SkillProjects_B_index" ON "_SkillProjects"("B");

-- AddForeignKey
ALTER TABLE "_SkillProjects" ADD CONSTRAINT "_SkillProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillProjects" ADD CONSTRAINT "_SkillProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
