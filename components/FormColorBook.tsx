"use client"

import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BookSchema = z.object({
    about: z.string(),
})

const FormColorBook = () => {

    const form = useForm<z.infer<typeof BookSchema>>({
        resolver: zodResolver(BookSchema),
        defaultValues: {
            about: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof BookSchema>) => {

        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='about'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Create new coloring page
                            </FormLabel>
                            <FormDescription>
                                {`Enter text describing the coloring sheet you want. Example prompts: 'Spiderman at the Grand Canyon', 'Stained Glass Mario'.`}
                            </FormDescription>
                            <FormControl>
                                <Input placeholder='Batman' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type='submit'>
                    Make my Coloring Sheet
                </Button>
            </form>
        </Form>
    )
}

export default FormColorBook