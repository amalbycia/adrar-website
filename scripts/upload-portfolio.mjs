import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: '4w668b16',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk1TExMWTjwJoEidTWfsn4yp9n9FtGNgD7ShTyi6HufLiGFO4TFfKVrX6cBBLdbIzZZXrLnI6JnDLjAtPZfr6mUOu3Yp3ioFAdNWMideigMe05Bp7yEES0BFlvLDyJipkBRVtkxfYCmzq1om7oNxrCDsL7j1SzMVhBgjvFq4HQ4wCezVmUfe',
  useCdn: false,
})

const ARTIFACTS_DIR = 'C:\\Users\\alkes\\.gemini\\antigravity\\brain\\4f8a6286-2b57-4709-b70e-fc17c1ce1812'

const projects = [
  { image: path.join(ARTIFACTS_DIR, 'project_four_seasons_booth_1775919644077.png'), title: 'Four Seasons Jumeirah', client: 'Four Seasons Resort Dubai', category: 'Experiential', order: 1 },
  { image: path.join(ARTIFACTS_DIR, 'project_hashim_hypermarket_1775919659405.png'), title: 'Hashim Hypermarket', client: 'Hashim Hypermarket', category: 'Retail Branding', order: 2 },
  { image: path.join(ARTIFACTS_DIR, 'project_nature_beats_1775919675551.png'), title: 'Nature Beats Organic', client: 'Nature Beats Organic', category: 'Signage', order: 3 },
  { image: path.join(ARTIFACTS_DIR, 'project_carrefour_ramadan_1775919692371.png'), title: 'Carrefour Ramadan Arch', client: 'Carrefour UAE', category: 'Experiential', order: 4 },
  { image: path.join(ARTIFACTS_DIR, 'project_shirin_asal_arch_1775919707530.png'), title: 'Shirin Asal Gate', client: 'Shirin Asal', category: 'Events', order: 5 },
  { image: path.join(ARTIFACTS_DIR, 'project_sharjah_coop_radio_1775919721639.png'), title: 'Sharjah Coop Radio', client: 'Sharjah Coop Radio', category: 'Events', order: 6 },
  { image: path.join(ARTIFACTS_DIR, 'project_west_zone_1775919736022.png'), title: 'West Zone Supermarket', client: 'West Zone Fresh', category: 'Retail Branding', order: 7 },
  { image: path.join(ARTIFACTS_DIR, 'project_carrefour_neon_1775919750017.png'), title: 'Carrefour Ramadan Neon', client: 'Carrefour UAE', category: 'Signage', order: 8 },
  { image: path.join(ARTIFACTS_DIR, 'project_mahawa_vending_1775920562932.png'), title: 'Ma Hawa Vending Machine', client: 'Ma Hawa', category: 'Branding', order: 9 },
  { image: path.join(ARTIFACTS_DIR, 'project_mahawa_dispenser_1775920578030.png'), title: 'Ma Hawa Dispenser', client: 'Ma Hawa', category: 'Branding', order: 10 },
  { image: path.join(ARTIFACTS_DIR, 'project_frosted_glass_logo_1775920593061.png'), title: 'Frosted Glass Branding', client: 'Corporate Client', category: 'Signage', order: 11 },
  { image: path.join(ARTIFACTS_DIR, 'project_glass_partition_1775920604513.png'), title: 'Office Glass Partitions', client: 'Corporate Client', category: 'Signage', order: 12 },
  { image: path.join(ARTIFACTS_DIR, 'project_spark_promo_stand_1775920623422.png'), title: 'Spark Promo Stand', client: 'Shirin Asal', category: 'Events', order: 13 },
  { image: path.join(ARTIFACTS_DIR, 'project_shirin_asal_christmas_1775920640217.png'), title: 'Shirin Asal Christmas', client: 'Shirin Asal', category: 'Experiential', order: 14 },
  { image: path.join(ARTIFACTS_DIR, 'project_coop_motorcycle_1775920654447.png'), title: 'Sharjah Coop Motorcycle', client: 'Sharjah Coop', category: 'Vehicle Branding', order: 15 },
  { image: path.join(ARTIFACTS_DIR, 'project_alivedx_glass_1775920667658.png'), title: 'AliveDx Office Branding', client: 'AliveDx', category: 'Signage', order: 16 },
  { image: path.join(ARTIFACTS_DIR, 'project_alivedx_entrance_1775920679546.png'), title: 'AliveDx Clinic Entrance', client: 'AliveDx', category: 'Signage', order: 17 },
]

async function uploadImage(filePath) {
  const buffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(filePath),
    contentType: 'image/png',
  })
  console.log(`✅ Uploaded: ${path.basename(filePath)} → ${asset._id}`)
  return asset
}

async function deleteExistingProjects() {
  const existing = await client.fetch('*[_type == "project"]._id')
  if (existing.length > 0) {
    console.log(`🗑  Deleting ${existing.length} existing projects...`)
    for (const id of existing) {
      await client.delete(id)
    }
  }
}

async function main() {
  await deleteExistingProjects()

  for (const project of projects) {
    console.log(`\n📸 Processing: ${project.title}`)
    const asset = await uploadImage(project.image)
    await client.create({
      _type: 'project',
      title: project.title,
      client: project.client,
      category: project.category,
      featured: true,
      order: project.order,
      image: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      },
    })
    console.log(`✅ Created: ${project.title}`)
  }

  console.log('\n🎉 All done! Portfolio updated in Sanity.')
}

main().catch(console.error)
