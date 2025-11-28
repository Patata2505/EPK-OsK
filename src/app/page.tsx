"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  const pressPhotos = [
    { id: 1, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/6-1764309263206.jpg?width=8000&height=8000&resize=contain", alt: "Sunset through tree branches" },
    { id: 2, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/5-1764309263200.jpg?width=8000&height=8000&resize=contain", alt: "Artistic illustration in subway" },
    { id: 3, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/4-1764309263102.jpg?width=8000&height=8000&resize=contain", alt: "Portrait photo" }
  ]

  const spotifyTracks = [
    { 
      id: 1, 
      embedUrl: "https://open.spotify.com/embed/track/6TNpzcQZAs9TzFUWUjcp7b?utm_source=generator"
    },
    { 
      id: 2, 
      embedUrl: "https://open.spotify.com/embed/track/7dmFofdcWUXogiZWw02vrW?utm_source=generator"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-200 via-amber-100 to-stone-300">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* PRESS PHOTOS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">PRESS PHOTOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MUSIC SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">MUSIC</h2>
          <div className="space-y-6 max-w-2xl">
            {spotifyTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <iframe
                  src={track.embedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ACERCA DE MI SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="pb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">ACERCA DE MI</h2>
          <motion.div 
            className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 space-y-6 max-w-4xl border border-gray-200 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-gray-800 leading-relaxed text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Soy Oscar Uriel, mejor conocido como OsK, un artista de Monterrey, Nuevo León.
              Mi camino en la música comenzó una noche de diciembre escuchando "Armagedon" de Humbe; esa vibra me empujó a escribir por primera vez. Con el tiempo descubrí que no era solo inspiración: también había dudas, miedos y la sensación de quedarme atrás.
            </motion.p>
            
            <motion.p
              className="text-gray-800 leading-relaxed text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Luego conocí a NSQK, alguien de mi propio estado que me mostró otro nivel de la música y me motivó a entrar al mundo de la producción, donde entendí que nada es tan fácil como parece.
              Meses después, un viernes de julio, la vida me cruzó con Felipe, quien se convirtió en una pieza clave para que mis sueños tomaran forma.
            </motion.p>
            
            <motion.p
              className="text-gray-800 leading-relaxed text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Actualmente me encuentro trabajando con un sello discografico llamado Medellin Records que me a apoyado desde mis inicios con "Eco" y "Dificil de Querer" estoy muy agradecidos con ellos, estamos haciendo el 3er tema de mi carrea y tengo demasiadas ganas de que ya puedan escucharlo
            </motion.p>
            
            <motion.p
              className="text-gray-800 leading-relaxed text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Mi misión es conectar con personas que sienten lo mismo que yo sentí: ruido interno, sueños enormes y miedo de no lograrlo.
              Quiero que mi música sea un abrazo, un recordatorio de que nadie está solo y de que siempre hay un camino.
            </motion.p>
            
            <motion.p
              className="text-gray-800 leading-relaxed text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Hoy sigo escribiendo recordando de dónde vengo y hacia dónde voy.
              Yo soy OsK, y esto apenas comienza.
            </motion.p>
          </motion.div>
        </motion.section>

      </main>
    </div>
  )
}
