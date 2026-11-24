/**
 * Profile photo for the Engineer Card.
 * Add ONE file named `profile` to src/data/images/ (profile.webp, .png, .jpg, .jpeg or .avif).
 * Without it, the card shows a gradient placeholder.
 */
const files = import.meta.glob<string>('./images/profile.{webp,png,jpg,jpeg,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const profilePhoto: string | undefined = Object.values(files)[0]
