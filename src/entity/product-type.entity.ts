import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Product } from "./product.entity"

@Entity({name: 'product_types'})
export class ProductType {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @OneToMany(() => Product, (product) => product.productTypeId)
    products: Product[]
}