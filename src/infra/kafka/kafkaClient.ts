import {Kafka} from 'kafkajs'


const kafka = new Kafka({
    clientId:'nodejs-typescript-kit',
    brokers: ['localhost:9092']
})

export const kafkaProcedur = kafka.producer()
export const kafkaConsumer = kafka.consumer({groupId:'nodejs-typescript-kit'})

export  const initKafka = async () => {
    await kafkaProcedur.connect().catch((error) => console.log(error))
    await kafkaConsumer.connect().catch((error) => console.log(error))
    console.log('kafka started')
}