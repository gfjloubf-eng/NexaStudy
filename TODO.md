# NexaStudy - TODO

## Prisma inverse relation completion
- [x] Inspect `backend/prisma/schema.prisma` and identify missing opposite relation fields.
- [x] Add missing inverse relations for AIConversation linked course/lesson.
- [x] Add inverse collections for AIConversation messages and usage events on `User`.
- [x] Add inverse collections for AIConversation linked course/lesson users.
- [ ] Run `prisma generate`
- [ ] Run `prisma migrate status`
- [ ] Run `prisma migrate dev --name init`
- [ ] Run `npm run build`

