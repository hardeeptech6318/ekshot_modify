"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
// import {motion} from "framer-motion"

function Page() {
  return (
    <section>
    {/* <motion.div
    
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} */}
  <div
    className=' p-10'>
        <h2 className=' text-center font-bold text-3xl'>Contact Us</h2>
        <form className=' flex gap-5 flex-col mx-auto w-80'>
            <div>
                <Label>Name</Label>
                <Input type='text'/>
            </div>
            <div>
                <Label>Email</Label>
                <Input type='text'/>
            </div>
            <div>
                <Label>Message</Label>
                <Textarea />
            </div>
            <Button>Submit</Button>
            </form>
    {/* </motion.div> */}
    </div>
</section>
  )
}

export default Page