import { z } from 'zod';

const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    birth: z.date(),
});

interface User extends z.infer<typeof UserSchema> { }

const user: User = {
    name: 'Jake Park',
    email: 'jake@example.com',
    birth: new Date('1996-08-30'),
}