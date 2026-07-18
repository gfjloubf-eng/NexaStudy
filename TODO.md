# NexaStudy - TODO

## Prisma inverse relation completion
- [x] Inspect `backend/prisma/schema.prisma` and identify missing opposite relation fields.
- [x] Add missing inverse relations for AIConversation linked course/lesson.
- [x] Add inverse collections for AIConversation messages and usage events on `User`.
- [x] Add inverse collections for AIConversation linked course/lesson users.
- [x] Run `prisma generate`
- [x] Run `prisma migrate status`
- [x] Run `prisma migrate dev --name init`
- [x] Run `npm run build`

## Next: Prisma integration into NestJS
- [x] Create `PrismaService` (PrismaClient lifecycle + logging)
- [x] Create `PrismaModule` (provider + export)
- [x] Wire `PrismaModule` into `AppModule`
- [x] Run `npm run build`
- [x] Run `npm run start` and verify runtime DB wiring


